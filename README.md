# nuxt shopping cart
An app that showcases how to use Express and Session with NuxtJS for learning it. Live demo

![cover](doc/cover.jpg)

# Preview
![preview](doc/preview.gif)

# API endpoints
### Items
| Route | HTTP Verb	 | Body	 | Description	 |
| --- | --- | --- | --- |
| /api/items | `GET` | Empty | List all items |

### Cart
| Route | HTTP Verb	 | Body	 | Description	 |
| --- | --- | --- | --- |
| /api/cart/add | `POST` | {"count":1,"id":1,"name":"Broccoli","price":9} | Add item to cart |
| /api/cart/change | `POST` | {"type":true,"item":{"count":2,"id":1,"name":"Broccoli","price":9,"totalPrice":18}} | Change item count from session and calculate total price |
| /api/cart/remove | `DELETE` | {"id":1} | Remove item by id from session and calculate total price |


## Build Setup
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

# LICENSE
```
MIT License

Copyright (c) 2021 Nejdet Kadir Bektaş

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
