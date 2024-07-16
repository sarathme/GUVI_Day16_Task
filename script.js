const count = document.querySelector(".countdown");

count.innerText = 10;

setTimeout(() => {
  count.innerHTML = 9;
  setTimeout(() => {
    count.innerHTML = 8;
    setTimeout(() => {
      count.innerHTML = 7;
      setTimeout(() => {
        count.innerHTML = 6;
        setTimeout(() => {
          count.innerHTML = 5;
          setTimeout(() => {
            count.innerHTML = 4;
            setTimeout(() => {
              count.innerHTML = 3;
              setTimeout(() => {
                count.innerHTML = 2;
                setTimeout(() => {
                  count.innerHTML = 1;
                  setTimeout(() => {
                    count.classList.remove("countdown");
                    count.classList.add("newyear");
                    count.innerHTML = "Happy New Year";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
