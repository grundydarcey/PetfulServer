PETFUL

PETFUL SUMMARIZED -
This website is created to represent an adoption agency that facilitates adoption of dogs and cats online. Instead of a typical adoption agency where adopters pick the pet of their choosing, this projects implements available cats and dogs in a queue data structure. This means, they get either the dog or cat that has been in the adoption agency (queue) the longest. The adopters are also treated the same way. The first person that submits their name for adoption will be the first person to receive a pet. This app starts with a landing page that describes the adoption process and has a button to begin the process. Underneath, there is a display showing the next-up cat and dog to be adopted. The cats and dogs exist in separate queue structures so when a cat is adopted, the display will replace his picture with a picture of the next cat in the queue, but the dog will stay the same. And vice versa. On clicking the start adoption button, the user will be taken to a page to start the adoption process. This will show a form where the user can input their name to be added to the queue. Below the form there is a line of text showing a handful of people in line before the user to adopt. When the user submits their name, they will see their name added into that line. After the name submission, the names previously in the list will be matched up with their pet, and both the names and the pet in question will be removed from the queue and the page view. When the user's name is finally at the front, a button will appear that allows the user to make a choice about whether they'd like a cat or dog. At this point, new names will fall into line at the end of the queue behind the new user's name. Upon pressing the make selection button, the user can choose from a drop-down selector whether they want a cat or dog. After submitting their selection, a button below the selection will allow them to view thier new pet. This prompts a new page, however the queue of people and the display of the next-up dogs and cats stays in view. This next page shows a picture of their new pet along with a description of the new pet.

TECH STACK USED -
This project uses 
-React.js for frontend framework
-Node.js, open-source cross-platform server
-Express.js for backend framework 
and javascript coding.

LINKS SECTION
-Live app - https://petful-client-template-grundydarcey.vercel.app/
-Client repo - https://github.com/grundydarcey/PetfulClient
-Live server - https://fast-wildwood-90277.herokuapp.com/
-API Repo - https://github.com/grundydarcey/Petfulserver

Link: https://fast-wildwood-90277.herokuapp.com/

I have created an API based on a queue data structure to work with this app as well. This is a basic API that allows for information to manipulated by all four CRUD functionalities by the user. My data structure contains pre-populated names of adopters, names of cats and dogs up for adoption. My API allows to call for information on the Heroku link from the /api endpoint. From there, information can be drawn from /cats, /dogs, /allCats, /allDogs, and /people. Link API/Server 

Endpoints: BASE URL: https://dry-brook-26909.herokuapp.com/api

GET /people

Provides object of all people objects in the queue. 
---EXAMPLE REQUEST/RESPONSE--- 
GET https://fast-wildwood-90277.herokuapp.com/api/people HTTP STATUS 200 OK 
{
    "first": {
        "value": "Randy Lahey",
        "next": {
            "value": "Trevor Cory",
            "next": {
                "value": "Jim Lahey",
                "next": null
            }
        }
    },
    "last": {
        "value": "Jim Lahey",
        "next": null
    },
    "size": 3
}

POST /people

Creates a new person object. Requires a request body. 

---KEY-----------VALUE-------- 
value: string, required minimum 1 length 

---EXAMPLE REQUEST/RESPONSE--- 
POST https://dry-brook-26909.herokuapp.com/api/members REQ BODY: { "member_name": "Darcey", "dollars": 300000 }

HTTP STATUS 201 Created Location: https://fast-wildwood-90277.herokuapp.com/api/people {
    "first": {
        "value": "Randy Lahey",
        "next": {
            "value": "Trevor Cory",
            "next": {
                "value": "Jim Lahey",
                "next": {
                   "value": "Darcey Grundy",
                   "next": null,
                }
            }
        }
    },
    "last": {
        "value": "Darcey Grundy",
        "next": null
    },
    "size": 4
}

DELETE /people

Deletes first person in the queue data structure. 

---EXAMPLE REQUEST/RESPONSE--- 
DELETE https://fast-wildwood-90277.herokuapp.com/api/people HTTP STATUS 200 OK     

{  "first": {
            "value": "Trevor Cory",
            "next": {
                "value": "Jim Lahey",
                "next": {
                   "value": "Darcey Grundy",
                   "next": null,
                }
            }
    },
    "last": {
        "value": "Darcey Grundy",
        "next": null
    },
    "size": 3
}

GET /cats

Provides object of the first cat in the queue. 

---EXAMPLE REQUEST/RESPONSE--- 
GET https://fast-wildwood-90277.herokuapp.com/api/cats HTTP STATUS 200 OK 
{
    "age": 2,
    "breed": "Bengal",
    "description": "Orange bengal cat with black stripes lounging on concrete.",
    "gender": "Female",
    "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "name": "Steve French",
    "story": "Thrown on the street"
}

DELETE /cats

Deletes first cat in the queue and replaces it with the next in the queue.

--EXAMPLE REQUEST/RESPONSE---
DELETE https://fast-wildwood-90277.herokuapp.com/api/cats HTTP STATUS 200 OK
{
    "age": 2,
    "breed": "white cat",
    "description": "White cat",
    "gender": "Female",
    "imageURL": "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "name": "Snapjacks",
    "story": "Thrown on the street"
}

GET /dogs

Provides object of the first dog in the queue. 

---EXAMPLE REQUEST/RESPONSE--- 
GET https://fast-wildwood-90277.herokuapp.com/api/dogs HTTP STATUS 200 OK 
{
    "age": 3,
    "breed": "Golden Retriever",
    "description": "A smiling golden-brown golden retreiver listening to music.",
    "gender": "Male",
    "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "name": "Zim",
    "story": "Owner Passed away"
}
DELETE /dogs

Deletes the first dog in the queue and replaces it with next in the queue, displays it upon request.

---EXAMPLE REQUEST/RESPONSE---
DELETE https://fast-wildwood-90277.herokuapp.com/api/dogs HTTP STATUS 200 OK
{
    "age": 3,
    "breed": "Akita",
    "description": "A smiling golden-brown dog",
    "gender": "Female",
    "imageURL": "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "name": "Fran",
    "story": "Found downtown"
}

GET /allCats

Provides object of the all cats currently in the queue. 

---EXAMPLE REQUEST/RESPONSE--- 
GET https://fast-wildwood-90277.herokuapp.com/api/allCats HTTP STATUS 200 OK 
{
    "first": {
        "value": {
            "age": 2,
            "breed": "Bengal",
            "description": "Orange bengal cat with black stripes lounging on concrete.",
            "gender": "Female",
            "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Steve French",
            "story": "Thrown on the street"
        },
        "next": {
            "value": {
                "age": 2,
                "breed": "white cat",
                "description": "White cat",
                "gender": "Female",
                "imageURL": "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "name": "Snapjacks",
                "story": "Thrown on the street"
            },
            "next": {
                "value": {
                    "age": 2,
                    "breed": "Bengal",
                    "description": "Grey cat",
                    "gender": "Female",
                    "imageURL": "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "name": "Grumpy-Face",
                    "story": "Thrown on the street"
                },
                "next": null
        }
    },
    "last": {
        "value": {
                    "age": 2,
                    "breed": "Bengal",
                    "description": "Grey cat",
                    "gender": "Female",
                    "imageURL": "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "name": "Grumpy-Face",
                    "story": "Thrown on the street"
                },
        "next": null
    },
    "size": 3
}


DELETE /allCats

Deletes the first cat in the queue and displays all of the rest of the cats.

---EXAMPLE REQUEST/RESPONSE---
DELETE https://fast-wildwood-90277.herokuapp.com/api/allCats HTTP STATUS 200 OK
{
    "first": {
        "value": {
            "age": 2,
            "breed": "white cat",
            "description": "White cat",
            "gender": "Female",
            "imageURL": "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Snapjacks",
            "story": "Thrown on the street"
        },
        "next": {
            "value": {
                "age": 2,
                "breed": "Bengal",
                "description": "Grey cat",
                "gender": "Female",
                "imageURL": "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "name": "Grumpy-Face",
                "story": "Thrown on the street"
            },
            "next": {
                "value": {
                    "age": 2,
                    "breed": "Bengal",
                    "description": "Orange cat",
                    "gender": "Female",
                    "imageURL": "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "name": "Garry Lazereyes",
                    "story": "Thrown on the street"
                },
                "next": null
            }
        }
    },
    "last": {
        "value": {
                    "age": 2,
                    "breed": "Bengal",
                    "description": "Orange cat",
                    "gender": "Female",
                    "imageURL": "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "name": "Garry Lazereyes",
                    "story": "Thrown on the street"
                },
        "next": null
    },
    "size": 3
}

GET /allDogs

Provides object of the all dogs currently in the queue. 

---EXAMPLE REQUEST/RESPONSE--- 
GET https://fast-wildwood-90277.herokuapp.com/api/allDogs HTTP STATUS 200 OK

{
    "first": {
        "value": {
            "age": 3,
            "breed": "Golden Retriever",
            "description": "A smiling golden-brown golden retreiver listening to music.",
            "gender": "Male",
            "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Zim",
            "story": "Owner Passed away"
        },
        "next": {
            "value": {
                "age": 3,
                "breed": "Akita",
                "description": "A smiling golden-brown dog",
                "gender": "Female",
                "imageURL": "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "name": "Fran",
                "story": "Found downtown"
            },
            "next": {
                "value": {
                    "imageURL": "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "description": "Black pug.",
                    "name": "Bilbo",
                    "gender": "Male",
                    "age": 3,
                    "breed": "Pug",
                    "story": "Owner Passed away"
                },
                "next": null
        }
    },
    "last": {
          "value": {
                    "imageURL": "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "description": "Black pug.",
                    "name": "Bilbo",
                    "gender": "Male",
                    "age": 3,
                    "breed": "Pug",
                    "story": "Owner Passed away"
                },
        "next": null
    },
    "size": 3
} 

DELETE /allDogs

Deletes the first dog in the queue and displays all of the rest of the dogs.

---EXAMPLE REQUEST/RESPONSE---
DELETE https://fast-wildwood-90277.herokuapp.com/api/allDogs HTTP STATUS 200 OK
{
    "first": {
        "value": {
            "age": 3,
            "breed": "Akita",
            "description": "A smiling golden-brown dog",
            "gender": "Female",
            "imageURL": "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Fran",
            "story": "Found downtown"
        },
        "next": {
            "value": {
                "imageURL": "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "description": "Black pug.",
                "name": "Bilbo",
                "gender": "Male",
                "age": 3,
                "breed": "Pug",
                "story": "Owner Passed away"
            },
            "next": {
                "value": {
                    "age": 3,
                    "breed": "Collie",
                    "description": "Border collie.",
                    "gender": "Male",
                    "imageURL": "https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "name": "Philip",
                    "story": "Owner Passed away"
                },
                "next": {
                    "value": {
                        "age": 3,
                        "breed": "Pug",
                        "description": "pug.",
                        "gender": "Male",
                        "imageURL": "https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        "name": "Doogie",
                        "story": "Owner Passed away"
                    },
                    "next": null
            }
        }
    },
    "last": {
        "value": {
                        "age": 3,
                        "breed": "Pug",
                        "description": "pug.",
                        "gender": "Male",
                        "imageURL": "https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                        "name": "Doogie",
                        "story": "Owner Passed away"
                    },
        "next": null
    },
    "size": 3
}



This is an app I made that helps people adopt their next pet. 

User Story 1:
As a pet lover, I want to visit the FIFO pet adoption site so that I can get more information about the adoption process.

When I go to the adoption agency site
* I see a description of the adoption process.
* I see a meaningful picture related to the description.
* I see a button for starting the adoption process.

User Story 2:
As a user interested in adopting pets, I want to get more information on each pet so that I can make an informed decision about who to adopt.

When I visit the adoption page, I can see:
* An image of the pet;
* A physical description of the pet;
* The pet's name, gender, age, and breed.
* A story of the pet's journey to the shelter

User Story 3:
As a user interested in adopting pets, I want to see the pets that I can adopt.

When I visit the adoption page, I can only see the pet that is next in line to be adopted.

User Story 4:
As a user interested in adopting pets, I want to get in line to adopt.

When I visit the adoption page:

* I can see a list of other people currently in line.
* I can submit my name and be added to the end of the line.
* When I am not at the beginning of the line, I cannot see an option to adopt a pet.
* For demo purposes: Once I join the line, I can see other pets being adopted until I am at the front of the line.
* Every five seconds, the user at the front of the line should be removed from the line and one of the pets up for adoption should disappear.
* When I am at the front of the line, a new user should be added to the line behind me every five seconds until there are a total of five users in line.

User Story 5:
As a user interested in adopting pets, I want to adopt a pet.

When I am at the front of the line:

* I can see an option to adopt a pet.
* When I choose to adopt a pet: 
    * I see a confirmation that I have adopted the pet.
    * I see my name removed from the line.
    * I see the pet I adopted is removed from view and replaced with another pet.