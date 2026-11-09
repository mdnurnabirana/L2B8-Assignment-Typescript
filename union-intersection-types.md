# Using Union and Intersection Types Together

In TypeScript, a union type (`|`) allows a value to be one of several types, while an intersection type (`&`) combines several types into one. Using both together is useful when some data can have different types but the object still needs a fixed set of properties.

A simple example is a user. The `id` can be a number or a string, and the user must also have a name and a phone number.

```ts
type Id = string | number;

type Person = { name: string };
type Contact = { phone: string };

type User = Person & Contact & { id: Id };

const user1: User = { id: 101, name: "Rana", phone: "01700000000" };
const user2: User = { id: "A-5", name: "Nur", phone: "01800000000" };

const formatId = (id: Id): string => {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return `#${id}`;
};
```

Here, `Id` is a union, so it accepts both `101` and `"A-5"`. The `User` type is an intersection, so every user must have `name`, `phone`, and `id` together. Both `user1` and `user2` are valid because the `id` can be either type.

Inside `formatId`, the `typeof` check narrows the union. In the `if` block TypeScript knows `id` is a string, so `toUpperCase()` is safe. After that, `id` must be a number.

In conclusion, unions give flexibility for a single value, and intersections combine small types into a bigger one. Together they keep the code simple and type-safe.