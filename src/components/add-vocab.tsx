import { Container } from "./container";

export const AddVocab = () => {
  return (
    <Container title="Add Vocab">
      <div className="flex flex-col">
        <div className="flex-1 pb-20">
          <VocabFormField label="Group" placeholder="food" />
          <VocabFormField label="Vocab" placeholder="apple" />
          <VocabFormField
            label="Sentence"
            placeholder="I'd like to eat an apple"
          />
          <VocabFormField label="Definition" placeholder="a fruit" />
        </div>
        <button className="rounded bg-gray-300 mx-20 my-4">Add</button>
      </div>
    </Container>
  );
};

const VocabFormField = ({ label, placeholder }: any) => {
  return (
    <div className="w-full flex px-8 py-2">
      <label className="flex-1 text-white">{label}</label>
      <input
        className="flex-1 rounded bg-gray-300 px-2"
        placeholder={placeholder}
      />
    </div>
  );
};
