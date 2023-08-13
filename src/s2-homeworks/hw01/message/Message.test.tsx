import { getByText, render } from "@testing-library/react";
import Message, { MessagePropsType } from "./Message";

import avatar from "../avatar.png";

describe("Message component", () => {
  const testData: MessagePropsType = {
    message: {
      id: 120,
      user: {
        avatar: avatar,
        name: "Test Name",
      },
      message: {
        text: "Hello, she didn’t do anything and rested all day, how fare you?",
        time: "22:00",
      },
    },
  };
  const { getByText } = render(<Message message={testData.message} />);

  test("name in the document", () => {
    const userName = getByText("Test Name");
    expect(userName).toBeInTheDocument();
  });
});
