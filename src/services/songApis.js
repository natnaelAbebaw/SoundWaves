import supabase, { supabaseUrl } from "./supabase";

export async function getAllSongs() {
  let { data: songs, error } = await supabase.from("Songs").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return songs;
}

export async function addSong(song) {
  if (song.audioFile) {
    const { fileName } = await uploadFile(song.audioFile, "songs");
    const audioUrl = `${supabaseUrl}/storage/v1/object/public/songs/${fileName}`;
    song.audioFile = audioUrl;
  }

  if (song.coverArt) {
    const { fileName } = await uploadFile(song.coverArt, "coverArt");
    const imageUrl = `${supabaseUrl}/storage/v1/object/public/coverArt/${fileName}`;
    song.coverArt = imageUrl;
  }

  const { data: newSong, error } = await supabase
    .from("Songs")
    .insert([song])
    .select("*");

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return newSong[0];
}

async function uploadFile(file, bucketName) {
  const randomId = Math.random().toString(36).substring(7);
  const fileName = `${randomId}${file.name}`;
  const { error } = await supabase.storage
    .from(bucketName)
    .upload(fileName, file);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return { fileName };
}

export async function updateSong(song) {
  const { id, ...songData } = song;
  const { data, err } = await supabase
    .from("Songs")
    .select("coverArt, audioFile")
    .eq("id", id);

  if (err) {
    console.log(err);
    throw new Error(error.message);
  }

  if (data && data.length > 0) {
    const { coverArt, audioFile } = data[0];
    if (
      songData.coverArt &&
      typeof songData.coverArt !== "string" &&
      coverArt
    ) {
      await supabase.storage.from("coverArt").remove([coverArt]);
    }
    if (
      songData.audioFile &&
      typeof songData.audioFile !== "string" &&
      audioFile
    ) {
      await supabase.storage.from("songs").remove([audioFile]);
    }
  }

  if (songData.audioFile && typeof songData.audioFile !== "string") {
    const { fileName } = await uploadFile(song.audioFile, "songs");
    const audioUrl = `${supabaseUrl}/storage/v1/object/public/songs/${fileName}`;
    songData.audioFile = audioUrl;
  }

  if (songData.coverArt && typeof songData.coverArt !== "string") {
    const { fileName } = await uploadFile(song.coverArt, "coverArt");
    const imageUrl = `${supabaseUrl}/storage/v1/object/public/coverArt/${fileName}`;
    songData.coverArt = imageUrl;
  }

  const { data: updatedSong, error } = await supabase
    .from("Songs")
    .update(songData)
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return updatedSong[0];
}

export async function deleteSong(song) {
  const { error } = await supabase.from("Songs").delete().eq("id", song.id);

  if (error) {
    throw new Error(error.message);
  }
  try {
    if (song.audioFile) {
      console.log(1, song.audioFile);
      await supabase.storage.from("songs").remove([song.audioFile]);
    }

    if (song.coverArt) {
      console.log(2);
      await supabase.storage.from("coverArt").remove([song.coverArt]);
    }
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }

  return song.id;
}
