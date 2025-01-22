# React Native useEffect Cleanup Function Error

This repository demonstrates a common error in React Native applications involving the `useEffect` hook and its cleanup function. The issue arises when an asynchronous operation within `useEffect` interacts with component unmounting, leading to errors when trying to access or modify state after the component has unmounted.

## Problem
The example shows how using an asynchronous operation within `useEffect` (e.g. a `setTimeout` simulating an API call) and performing actions in the cleanup function (like setting state) can result in an error if the component unmounts before the asynchronous operation completes. The cleanup function attempts to access and modify state, which is no longer available because the component is unmounted. 

## Solution
The solution demonstrates using a boolean variable to track whether the component is still mounted. This prevents state updates within the cleanup function when the component is unmounted, thereby preventing the error. 