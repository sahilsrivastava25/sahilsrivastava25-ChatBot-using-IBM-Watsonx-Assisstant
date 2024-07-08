  window.watsonAssistantChatOptions = {
    integrationID: "ec9808c8-cfb1-47f5-8935-df9d6c3889f2", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "ef94acbb-13e2-4e61-b521-cc597fb0c41b", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });