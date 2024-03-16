import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TypingLoader,
  TextMessageBox,
} from "../components";

interface Message {
  text: string;
  isGpt: boolean;
}

export const ChatTemplate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessages((prevMessages) => [...prevMessages, { text, isGpt: false }]);

    // TODO: UseCase

    setIsLoading(false);

    // TODO: Añadir el mensaje de isGPT en true
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessage text="Hola, soy GPT-3. ¿En qué puedo ayudarte?" />
          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessage key={index} text={"Esto es de OpenAI"} />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          )}
          {isLoading && (
            <div className="col-start-1 col-end-12">
              <TypingLoader className="fade-in" />
            </div>
          )}
        </div>
      </div>
      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe un mensaje aquí"
        disableCorrections={true}
      />
    </div>
  );
};
