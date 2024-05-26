import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";
import Section from "./Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(false);

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        // buttonsContainer="menu" => ist in Tabs default auf menu gesetzt
        buttonSlot={
          <>
            <TabButton
              tabName={"Components"}
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            ></TabButton>
            <TabButton
              tabName={"JSX"}
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            ></TabButton>
            <TabButton
              tabName={"Props"}
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            ></TabButton>
            <TabButton
              tabName={"State"}
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            ></TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
