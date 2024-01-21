import React from "react";
import { ChatAutoComplete, useMessageInputContext } from "stream-chat-react";
import { useTranslation } from "react-i18next";
function CustomInput() {
  const {t}=useTranslation()
  const { handleSubmit } = useMessageInputContext();
  return (
    <div className="str-chat__input-flat str-chat__input-flat--send-button-active inputCustom">
      <div className="str-chat__input-flat-wrapper">
        <div >
          <ChatAutoComplete />
        </div>
        <button className onClick={handleSubmit}> {t('sendMessage')}</button>
      </div>
    </div>
  );
}

export default CustomInput;
