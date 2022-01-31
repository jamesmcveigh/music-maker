document.querySelector("#play-button").addEventListener("click", async () => {
    await Tone.start();
    //create a synth and connect it to your speakers
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of a quaver
    synth.triggerAttackRelease("C4", "8n");
});
