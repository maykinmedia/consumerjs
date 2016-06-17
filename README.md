# ConsumerJS

A REST API consumer (data store) built on top of [aurelia-http-client](https://github.com/aurelia/http-client) with built-in (Django) csrf support.

ConsumerJS is build to provide a better developer experience while object-orientated programming with remote objects. ConsumerJS fetches data and casts these to named objects so they can have properties and methods.

## Installation

`npm install maykinmedia/consumerjs`

## Usage

Simple example (es6):
```javascript
import { Consumer, ConsumerObject } from 'consumerjs';

class Post extends ConsumerObject {}
let consumer = new Consumer('http://jsonplaceholder.typicode.com', Post)

consumer.get('/posts/1').then(data => {
    console.log('Got new Post object', data)
}).catch(error => {
    console.warn('Failed to fetch data:', error);
});
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

The MIT License (MIT)

Copyright (c) 2015 Maykin Media

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
