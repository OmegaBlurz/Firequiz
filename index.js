#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";

console.log(chalk.bgGreen('hi mom'));

let playerName;

const sleep = (ms=3000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const pulseTitle = chalkAnimation.pulse(
        "Who wants to be a JavaScript millionaire? \n", 0.5
    );

    await sleep();
    pulseTitle.stop();

    console.log(`
        ${chalk.bgBlue('HOW TO PLAY')}
        I am a process on your computer.
        If you get any question wrong I will be ${chalk.bgRed('killed')}
        So get them right...

    `);
}

await welcome()