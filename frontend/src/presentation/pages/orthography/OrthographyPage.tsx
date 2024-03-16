import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TextMessageBox,
  TextMessageBoxFile,
  TextMessageBoxSelect,
  TypingLoader,
} from "../../components";

interface Message {
  text: string;
  isGpt: boolean;
}

export const OrthographyPage = () => {
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
      {/* <TextMessageBoxFile
        onSendMessage={handlePost}
        placeholder="Escribe un mensaje aquí"
      /> */}
      {/* <TextMessageBoxSelect
        onSendMessage={handlePost}
        options={[
          { id: "1", text: "Opción 1" },
          { id: "2", text: "Opción 2" },
          { id: "3", text: "Opción 3" },
        ]}
      /> */}
    </div>
  );
};
