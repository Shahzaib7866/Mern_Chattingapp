--- System Architecture ---

so i have to make a message system....

in each message what i need to have: Sender, Receiver, message

MessageModel:
SenderId: req.user_id;
ReceiverId: req.params.receiverId;
Message: req.body.message;

to save & later to get older messages we need to have Conversation model, 
first check message's conversation model has been made or not 
Conversation.find(sender,receiver);
if not than
Conversation.create(sender,receiver);
than message.create() and than we will push message to conversation 
like conversation message push




