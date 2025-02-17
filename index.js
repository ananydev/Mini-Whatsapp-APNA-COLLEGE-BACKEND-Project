<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mini Whatsapp</title>
  <link rel="stylesheet" href="/style.css"/>
</head>
<body>
    <h3>All Chats!</h3>
      <form method="GET" action="/chats/new">
      <button>New Chat</button>
      </form>
      <br />
    <% for (let chat of chats) { %>
      <div class="chat">
        <p>From: <%= chat.from %></p>
        <div class="msg">
          <p><%= chat.msg %></p>
          <form method="GET" action="/chats/<%= chat._id%>/edit">
            <button>Edit</button>
          </form>

          <form method="POST" action="/chats/<%= chat._id %>?_method=DELETE">
            <button>delete</button>
        </form>
        
        
        </div>
        <p>Received by: <%= chat.to %></p>
        <hr>
        <p><%= chat.created_at.toString().split(" ")[4] %></p>
        <p><%= chat.created_at.toString().split(" ").slice(0, 4).join(" ") %></p>

      </div>
      <br>
      <br>
    <% } %>
</body>
</html>
 
