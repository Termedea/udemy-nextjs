//not sure if I want this pattern or if it feels better to just import the functions directly from their files. I guess it depends on how many functions I have in each file and if I want to group them together in a single file for easier imports.

export { createTopic } from './topic';
export { createPost } from './post';
export { createComment } from './comment';
export { signIn, signOut } from './auth';
