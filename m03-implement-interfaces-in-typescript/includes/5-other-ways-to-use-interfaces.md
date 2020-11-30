Now that you know the basics of declaring and implementing an interface, let's look at some other ways you can use them.

## Create indexable types

You can use interfaces that describe array types that you can index into.

Indexable types have an *index signature* that describes the type you can use to index into the object, along with the corresponding return types when indexing. 

For example, the `IceCreamArray` interface declares an index signature as a `number` and returns a `string` type. This index signature states that `IceCreamArray `is indexed with a number and it will return a string.

```typescript
interface IceCreamArray {
  [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);
```

You can also use the built-in array type or create a type alias for a custom array, but by using an interface, you can define your own array type so that anyone who wants to work with that interface can apply it consistently.

## Describe a JavaScript API using an interface

A common pain point for JavaScript and TypeScript developers alike is working with external JavaScript libraries. You can use an interface to describe existing JavaScript APIs and clarify function parameters and return types. The interface provides you with a clear understanding of what an API is expecting and what it will return.

The `fetch` API is a native JavaScript function that you can use to interact with web services. This example declares an interface called `Post` for the return types in a JSON file and then uses `fetch` with `async` and `await` to generate a strongly typed response.

```typescript
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'

// Interface describing the shape of the json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to retrieve the data
async function fetchResource<T>(request: RequestInfo): Promise<T> {
  let response = await fetch(request);
  let body = await response.json();
  return body;
}

async function showPosts() {
  let posts = await fetchResource<Post[]>(fetchURL);

  // Display the contents of the first item in the response
  let post = posts[0];
  let pBody = post.body;
  let pTitle = post.title;
  let pID = post.id;
  let pUserName = post.userId == 1 ? "Administrator" : post.userId.toString();
  let msg = '<h2>Post #' + pID + ': (author: ' + pUserName + ')<br/>' + pTitle + '</h2><p>' + pBody + '</p>'
  document.body.innerHTML = msg;
}

showPosts();
```

> [!TIP]
> TIP A side note on using `fetch` with `async` and `await` in TypeScript. While ES3 doesn't support `async` and `await`, the TypeScript compiler is able to generate ES3 compatible code that implements this feature. This enables you to take advantage of the newer feature while still being able to target older browsers! In the Playground, copy and paste the example above, set the target to ES3, and check out the helper code that TypeScript generates to make this possible.

