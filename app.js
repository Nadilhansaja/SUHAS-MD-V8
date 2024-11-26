{
  "name": "SUHAS-MD-V8",
  "description": "Javascript WhatsApp bot made by Nadil Hansaja",
  "logo": "https://i.ibb.co/hCrGbHg/IMG-20241103-WA0061.jpg",
  "keywords": ["bot"],
  "success_url": "/",

  "env": {
    "SESSION_ID": {
      "description": "Put the session-id here.",
      "required": true
    },  

    "ALIVE_IMG": {
      "description": "Put your alive img here.",
      "required": true
    },
    
    "ALIVE_MSG": {
      "description": "Put your alive msg here.",
      "required": true
    }   
},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}
