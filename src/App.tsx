"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
        "No",
        "no...",
        "Are you sure?",
        "But darling...",
        "Pretty please precious",
        "With an autism cake on the side?",
        "PLEASE BABY",
        "But :*(",
        "I am going to die",
        "Yep im dead",
        "ok ur talking to Skye's ghost",
        "please babe",
        "PRETTY PLEASE",
        "Please babyyy",
        "No :(",
        "Think of the dogs!",
        "I’ll cry :(",
        "Don’t do this to me!",
        "You’ll regret this later...",
        "But I bought snacks!",
        "Remember our plans :(",
        "I made cookies for us...",
        "Are you seriously saying no?!",
        "You’re joking, right?",
        "Is this a prank?",
        "What about our Minecraft house?",
        "I’ll let you win next time!",
        "I’ll delete your cringe tweets if you say yes!",
        "Don’t let my heart shatter :(",
        "Come onnnnnnnnnnnn...",
        "I wrote you a song for this!",
        "What if I give you all the diamonds in Minecraft?",
        "No? But I already told my mom...",
        "Think about it for a second...",
        "How could you do this to me?",
        "But we’re endgame!",
        "Sksksk nooooo...",
        "I’ll respawn and ask again!",
        "You can't say no to this face!",
        "Do you really want to see me suffer?",
        "Even the stars are begging you!",
        "The universe will implode if you say no.",
        "What if I make you pancakes?",
        "I’ll put your favorite toppings on it!",
        "You’re breaking the simulation!",
        "But the cat agrees with me!",
        "Don’t make me unleash the puppy eyes...",
        "Okay, but what if I compromise?",
        "I’ll trade you my rarest Pokémon card!",
        "What if we flip a coin? Heads you agree.",
        "I’ll watch your favorite movie with you!",
        "We were meant to be! :(",
        "Even my Sims would say yes!",
        "I already planned my victory speech...",
        "But it’s our thing! :(",
        "This is betrayal!",
        "Think of all the NPCs rooting for us!",
        "Please, for the memes?",
        "I’ll name my next pet after you!",
        "Okay, but plot twist: you’re wrong.",
        "You just activated my trap card... agree!",
        "What if I make you spaghetti?",
        "The WiFi gods will punish you if you say no!",
        "You’re supposed to be my player 2!",
        "No? Okay, but I’m logging this in my diary.",
        "I’ll bake you a cake... with sprinkles!",
        "Even the villagers are voting yes.",
        "Don’t make me send a creeper to your house!",
        "Okay, but consider: hugs.",
        "You’re saying no to *me*? Rude.",
        "Just say yes, it’s not that hard!"
    ];

    return phrases[Math.floor(Math.random() * phrases.length)];
};
  

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you Owen!! ;))</div>
          <div className="my-4 text-4xl font-bold">You're So amazing!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://i.pinimg.com/originals/49/9d/ff/499dff1b825ded0acb3dafb4536e734b.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Boyfriend?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
