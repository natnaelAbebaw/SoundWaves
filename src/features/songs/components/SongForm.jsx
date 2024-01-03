import Form from "../../../uis/Form";
import FormRow from "../../../uis/FormRow";
import Input from "../../../uis/Input";
import Button from "../../../uis/Button";
import Heading from "../../../uis/Heading";
import { useForm } from "react-hook-form";
import { getAudioBuffer } from "../../../utils";
import { addSongStart, editSongStart, setSongForm } from "../songSlice";
import { useDispatch, useSelector } from "react-redux";
import { ClockLoader } from "react-spinners";
import Row from "../../../uis/Row";

function SongForm({ song }) {
  let intialSongValues = {};
  let editSession = false;
  if (song) {
    editSession = true;
    intialSongValues = {
      title: song.title,
      artist: song.artist,
      album: song.album,
      genre: song.genre,
      audioFile: song.audioFile,
      coverArt: song.coverArt,
    };
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: intialSongValues });

  const dispatch = useDispatch();

  const { formStatus } = useSelector((state) => state.songs);

  async function onSubmit(data) {
    let newSong = {
      ...data,
      coverArt:
        data.coverArt &&
        (typeof data.coverArt === "string" ? data.coverArt : data.coverArt[0]),
      audioFile:
        data.coverArt &&
        (typeof data.audioFile === "string"
          ? data.audioFile
          : data.audioFile[0]),
    };
    try {
      if (data.audioFile && !(typeof data.audioFile === "string")) {
        const audioBuffer = await getAudioBuffer(newSong.audioFile);
        const duration = audioBuffer.duration;
        const channels = audioBuffer.numberOfChannels;
        const sampleRate = audioBuffer.sampleRate;
        const minutes = `${Math.floor(duration / 60)}`.padStart(2, "0");
        const seconds = `${Math.round(duration % 60)}`.padStart(2, "0");

        newSong = {
          ...newSong,
          duration: `${minutes}:${seconds}`,
          channels,
          sampleRate,
        };
      }
    } catch (error) {
      console.error("Error on decoding audio file:", error);
    }
    console.log(newSong);
    if (editSession) {
      newSong = { ...newSong, id: song.id };
      console.log("newSong");
      dispatch(editSongStart(newSong));
    } else {
      dispatch(addSongStart(newSong));
      // onClose(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2" mb="2rem">
        {editSession ? "Edit" : "Add"} NEW SONG
      </Heading>
      <FormRow label={"Title"} error={errors.title}>
        <Input
          type="text"
          id="Title"
          name="title"
          disabled={formStatus === "loading"}
          {...register("title", { required: "Song title is required" })}
        />
      </FormRow>
      <FormRow label={"Artist"} error={errors.artist}>
        <Input
          type="text"
          id="artist"
          name="artist"
          disabled={formStatus === "loading"}
          {...register("artist")}
        />
      </FormRow>
      <FormRow label={"Album"} error={errors.album}>
        <Input
          type="text"
          id="album"
          name="album"
          disabled={formStatus === "loading"}
          {...register("album")}
        />
      </FormRow>
      <FormRow label={"Genre"} error={errors.genre}>
        <Input
          type="text"
          id="genre"
          name="genre"
          disabled={formStatus === "loading"}
          {...register("genre")}
        />
      </FormRow>
      <FormRow label={"Audio"} error={errors.audioFile}>
        <Input
          type="file"
          id="audio"
          accept="audio/*"
          disabled={formStatus === "loading"}
          {...register(
            "audioFile",
            !editSession ? { required: "Audio file is required" } : {}
          )}
        />
      </FormRow>
      <FormRow label={"CoverArt"} error={errors.coverArt}>
        <Input
          type="file"
          id="coverArt"
          accept="image/*"
          disabled={formStatus === "loading"}
          {...register("coverArt")}
        />
      </FormRow>

      <FormRow>
        <Button
          onClick={() => dispatch(setSongForm(false))}
          variation="secondary"
          size="medium"
          disabled={formStatus === "loading"}
          type="reset"
        >
          Cancel
        </Button>
        <Button size="medium" disabled={formStatus === "loading"}>
          <Row justifyContent="center">
            {formStatus === "loading" ? (
              <ClockLoader color="var(--color-grey-0)" size="1.6rem" />
            ) : null}
            {formStatus === "loading"
              ? `${editSession ? "Editing" : "Adding"} song...`
              : `${editSession ? "Edit" : "Add"} song`}
          </Row>
        </Button>
      </FormRow>
    </Form>
  );
}

export default SongForm;
