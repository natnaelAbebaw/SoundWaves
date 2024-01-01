import Form from "../../../uis/Form";
import FormRow from "../../../uis/FormRow";
import Input from "../../../uis/Input";
import Button from "../../../uis/Button";
import Heading from "../../../uis/Heading";

function SongForm({ onClose }) {
  return (
    <Form>
      <Heading as="h2">ADD NEW SONG</Heading>
      <FormRow label={"Title"}>
        <Input type="text" id="Title" name="title" />
      </FormRow>
      <FormRow label={"Artist"}>
        <Input type="text" id="Title" name="title" />
      </FormRow>
      <FormRow label={"Album"}>
        <Input type="text" id="Title" name="title" />
      </FormRow>
      <FormRow label={"Genre"}>
        <Input type="text" id="Title" name="title" />
      </FormRow>
      <FormRow label={"Audio"}>
        <Input type="file" id="Audio" accept="Audio/*" />
      </FormRow>
      <FormRow label={"CoverArt"}>
        <Input type="file" id="CoverArt" accept="CoverArt/*" />
      </FormRow>

      <FormRow>
        <Button
          onClick={() => onClose(false)}
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button>Add Song</Button>
      </FormRow>
    </Form>
  );
}

export default SongForm;
