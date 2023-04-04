 const text = document.getElementById("text");
      const delay = document.getElementById("delay");
      const btn = document.getElementById("btn");
      const output = document.getElementById("output");

      async function displayMessageWithDelay() {
        const message = text.value;
        const delayTime = Number(delay.value);
        await new Promise((resolve) => setTimeout(resolve, delayTime));
        output.innerText = message;
      }

      btn.addEventListener("click", displayMessageWithDelay);
