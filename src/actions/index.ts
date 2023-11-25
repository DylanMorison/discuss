'use server';

/**
 * This file contains Next.js server actions.
 *
 * Next.js server actions are functions that handle server-side logic in a Next.js application.
 * These actions can be used to perform tasks such as fetching data from an API, handling form submissions,
 * or implementing server-side rendering.
 *
 * 'use server' in Next.js lets components fetch data and handle logic on the server side,
 * right when a request is made, before sending the results to the client.
 * It's like having a smart assistant on the server, preparing everything 
 * so that when it reaches your screen, it's exactly as needed.
 * 
/**
 * 'use server': This is like having a wise sage (the server) who does all the complex calculations
 * and decision-making behind the scenes. In Next.js 13, when you use 'use server', it means that
 * the component or logic you're working with is executed on the server side. This is particularly
 * useful for operations that are heavy or sensitive, like data fetching, complex calculations, or
 * dealing with confidential information. It's a bit like having Panam from "Cyberpunk 2077"
 * handling the tough enemies (server-side tasks) before you even get there. The server does the
 * work, and the results are then passed down to the client.
 *
 * 'use client': On the other hand, 'use client' is like gearing up for a solo mission where you,
 * the client, are in charge. This hook indicates that the component or logic should run exclusively
 * in the client's bowser. It's perfect for things that are specific to the individual user's
 * experience, like UI state, animations, or client-side interactivity. Imagine you're Anakin
 * Skywalker from "Star Wars", piloting your starfighter; you need real-time, client-side reactions
 * to navigate the battle.
 */

import * as auth from '@/auth';

export async function signIn() {
  return auth.signIn('github');
}

export async function signOut() {
  return auth.signOut();
}
