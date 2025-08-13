const storyText = [
    "Date: June 2nd 2135",
    "Location: Sydney City",
    "The room is dark.",
     "The only light emanating from a vintage alarm clock.", 
     "The digital numbers flicker with weakness, but still appear bright enough to be legible.",
    "They read,",
    "07:59.",
    "The screen pauses before flashing 08:00.",
    "In an instant each wall lights up with the searing brightness of blue skies plastered behind over-saturated yellow sand."
];

const storyDiv = document.getElementById('story');

//used CoPilot to create a typewriter effect 
function typeText(text, speed, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            storyDiv.innerHTML += text[i];
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function showColumns() {
    document.querySelector('.left-column').style.height = '100vh';
    document.querySelector('.right-column').style.height = '100vh';
}

//used CoPilot to make the numbers type slower than the rest 
function showStory(lines) {
    let idx = 0;
    function nextLine() {
        if (idx < lines.length) {
            if (lines[idx] === "07:59.") {
                let numbers = "07:59.";
                let j = 0;
                function typeNumber() {
                    if (j < numbers.length) {
                        storyDiv.innerHTML += numbers[j];
                        j++;
                        setTimeout(typeNumber, 600);
                    } else {
                        storyDiv.innerHTML += "\n\n";
                        idx++;
                        setTimeout(nextLine, 300);
                    }
                }
                typeNumber();
            } else {
                typeText(lines[idx] + "\n\n", 40, () => {
                    idx++;
                    setTimeout(nextLine, 200);
                });
            }
            
        } else {
            showColumns();
            setTimeout(() => {
            storyDiv.classList.add('fade-out'); 
            setTimeout(() => {
            storyDiv.style.display = 'none';
        }, 1000); }, 1000);
            setTimeout(() => {
                document.body.classList.add('blue-bg');}, 1800);
            setTimeout(() => {
             document.querySelector('.left-column').style.display = 'none';
             document.querySelector('.right-column').style.display = 'none'; }, 2000);
            setTimeout(() => {
                const story2 = document.getElementById("story2");
                story2.style.display = "block";
                story2.classList.add("fade-in");
                }, 1500);
            setTimeout(() => {
                const day1button1 = document.getElementById("next-button");
                day1button1.style.display = "block";
                day1button1.classList.add("fade-in");
            }, 3000);
        }
    }
    nextLine();
}

showStory(storyText);

document.getElementById("next-button").addEventListener("click", function() {
  const sound = new Audio('ambient music.mp3');
    sound.play();
setTimeout(() => {
    window.location.href = "index2.html";
}, 9500);
  
});

function day1button2() {
    document.getElementById('day1button2').style.display='none';
    const day1text2 = document.getElementById("day1text2");
    day1text2.style.display = "block";
    day1text2.classList.add("fade-in-fast");
    setTimeout(() => {
                const day1text3 = document.getElementById("day1text3");
                day1text3.style.display = "block";
                day1text3.classList.add("fade-in-fast");
            }, 3000);
    setTimeout(() => {
                const day1text3b = document.getElementById("day1text3b");
                day1text3b.style.display = "block";
                day1text3b.classList.add("fade-in-fast");
            }, 4500);
    setTimeout(() => {
                const day1text3c = document.getElementById("day1text3c");
                day1text3c.style.display = "block";
                day1text3c.classList.add("fade-in-fast");
            }, 6000);        
     setTimeout(() => {
                const day1text3d = document.getElementById("day1text3d");
                day1text3d.style.display = "block";
                day1text3d.classList.add("fade-in-fast");
            }, 8000);        
    setTimeout(() => {
                const day1button3 = document.getElementById("day1button3");
                day1button3.style.display = "block";
                day1button3.classList.add("fade-in-fast");
            }, 12000);
}

function day1button3() {
    document.getElementById('day1button3').style.display='none';
    const day1text4 = document.getElementById("day1text4");
    day1text4.style.display = "block";
    day1text4.classList.add("fade-in-fast");
     setTimeout(() => {
                const day1text4a = document.getElementById("day1text4a");
                day1text4a.style.display = "block";
                day1text4a.classList.add("fade-in-fast")
            }, 1500);
     setTimeout(() => {
        const sound = new Audio('screenchangesfx.mp3');
                sound.play();
    }, 2500);
     setTimeout(() => {
                const screenchange = document.getElementById("screenchange");
                screenchange.style.display = "block";
                screenchange.classList.add("screenchange");
                screenchange.classList.add("fade-in");
            }, 3000);
    setTimeout(() => {
                const day1text5 = document.getElementById("day1text5");
                day1text5.style.display = "block";
                day1text5.classList.add("fade-in-fast")
                document.getElementById('day1text4b').style.display='none';
                document.getElementById('day1text4c').style.display='none';
            }, 5500);
    setTimeout(() => {
                const day1text6 = document.getElementById("day1text6");
                day1text6.style.display = "block";
                day1text6.classList.add("fade-in-fast")
                document.getElementById('day1text5b').style.display='none';
            }, 8500);
     setTimeout(() => {
                const day1text7 = document.getElementById("day1text7");
                day1text7.style.display = "block";
                const sound = new Audio('slam.mp3');
                sound.play();
                const screenchangeC = document.getElementById("screenchange");
                screenchangeC.style.display = "block";
                screenchangeC.classList.add("screenchangeC");
            }, 11500);
     setTimeout(() => {
                const Bday1text1 = document.getElementById("Bday1text1");
                Bday1text1.style.display = "block";
                Bday1text1.classList.add("fade-in-fast");
            }, 13000); 
    setTimeout(() => {
                const Bday1text2 = document.getElementById("Bday1text2");
                Bday1text2.style.display = "block";
                Bday1text2.classList.add("fade-in-fast");
                Bday1text2.classList.add("user2");
            }, 16000);   
    setTimeout(() => {
                const Bday1text3 = document.getElementById("Bday1text3");
                Bday1text3.style.display = "block";
                Bday1text3.classList.add("fade-in-fast");
                Bday1text3.classList.add("user2");
            }, 22500); 
     setTimeout(() => {
                const Bday1text4 = document.getElementById("Bday1text4");
                Bday1text4.style.display = "block";
                Bday1text4.classList.add("fade-in-fast");
                Bday1text4.classList.add("user2");
            }, 25500);         
    setTimeout(() => {
                const Bday1text5 = document.getElementById("Bday1text5");
                Bday1text5.style.display = "block";
                Bday1text5.classList.add("fade-in-fast");
                Bday1text5.classList.add("user2");
            }, 27500);
    setTimeout(() => {
                const Bday1text6 = document.getElementById("Bday1text6");
                Bday1text6.style.display = "block";
                Bday1text6.classList.add("fade-in-fast");
                Bday1text6.classList.add("user2");
            }, 30000);
    setTimeout(()=> {
        const watchFaceDiv = document.getElementById('watchFaceDiv');
        watchFaceDiv.style.display='block';
        watchFaceDiv.classList.add("fade-in-fast");
    }, 33500
    );
     setTimeout(()=> {
        document.getElementById('BdayButtonDiv').style.display='block'
    }, 36500
    );

    
}


function day1button3b() {
    document.getElementById('day1button3').style.display='none';
    document.getElementById('day1text4').style.display='none';
    const day1text4b = document.getElementById("day1text4b");
    day1text4b.style.display = "block";
    day1text4b.classList.add("fade-in-fast");
    document.getElementById('day1text4a').style.display='none';
    setTimeout(() => {
                const day1text4c = document.getElementById("day1text4c");
                day1text4c.style.display = "block";
                day1text4c.classList.add("fade-in-fast");
    }, 1500);
    setTimeout(() => {
        const sound = new Audio('screenchangesfx.mp3');
                sound.play();
    }, 2500);
    setTimeout(() => {
                const screenchangeB = document.getElementById("screenchange");
                screenchangeB.style.display = "block";
                screenchangeB.classList.add("screenchangeB");
                screenchangeB.classList.add("fade-in");
            }, 3000);
    setTimeout(() => {
                const day1text5 = document.getElementById("day1text5b");
                day1text5.style.display = "block";
                day1text5.classList.add("fade-in-fast")
                document.getElementById('day1text5').style.display='none';
            }, 4500);
    setTimeout(() => {
                const day1text6 = document.getElementById("day1text6");
                day1text6.style.display = "block";
                day1text6.classList.add("fade-in-fast")
            }, 7000);
     setTimeout(() => {
                const day1text7 = document.getElementById("day1text7");
                day1text7.style.display = "block";
                const sound = new Audio('slam.mp3');
                sound.play();
                const screenchangeC = document.getElementById("screenchange");
                screenchangeC.style.display = "block";
                screenchangeC.classList.add("screenchangeC");
            }, 10000);
    setTimeout(() => {
                 const Bday1text1 = document.getElementById("Bday1text1");
                Bday1text1.style.display = "block";
                Bday1text1.classList.add("fade-in-fast");
                Bday1text1.classList.add("user2");
            }, 13000);
     setTimeout(() => {
                const Bday1text2 = document.getElementById("Bday1text2");
                Bday1text2.style.display = "block";
                Bday1text2.classList.add("fade-in-fast");
                Bday1text2.classList.add("user2");
            }, 16000);   
    setTimeout(() => {
                const Bday1text3 = document.getElementById("Bday1text3");
                Bday1text3.style.display = "block";
                Bday1text3.classList.add("fade-in-fast");
                Bday1text3.classList.add("user2");
            }, 22500); 
     setTimeout(() => {
                const Bday1text4 = document.getElementById("Bday1text4");
                Bday1text4.style.display = "block";
                Bday1text4.classList.add("fade-in-fast");
                Bday1text4.classList.add("user2");
            }, 25500);         
    setTimeout(() => {
                const Bday1text5 = document.getElementById("Bday1text5");
                Bday1text5.style.display = "block";
                Bday1text5.classList.add("fade-in-fast");
                Bday1text5.classList.add("user2");
            }, 27500);
    setTimeout(() => {
                const Bday1text6 = document.getElementById("Bday1text6");
                Bday1text6.style.display = "block";
                Bday1text6.classList.add("fade-in-fast");
                Bday1text6.classList.add("user2");
            }, 30000);
    setTimeout(()=> {
        const watchFaceDiv = document.getElementById('watchFaceDiv');
        watchFaceDiv.style.display='block';
        watchFaceDiv.classList.add("fade-in-fast");
    }, 33500
    );
     setTimeout(()=> {
        document.getElementById('BdayButtonDiv').style.display='block'
    }, 36500
    );

}

function day1button4() {
    document.getElementById('day1button4').style.display='none';
    const day1text5 = document.getElementById("day1text5");
    day1text5.style.display = "block";
    day1text5.classList.add("fade-in-fast");
setTimeout(() => {
                window.location.href = "day1C.html";}, 3000); 

  

}

function day1Ctext() {
document.getElementById('button1C').style.display='none';

setTimeout(() => {
            const Bday1text1 = document.getElementById("Bday1text1");
            Bday1text1.style.display = "block";
            Bday1text1.classList.add("fade-in-fast");
            Bday1text1.classList.add("user2");
        }, 1000);

setTimeout(() => {
            const Bday1text2 = document.getElementById("Bday1text2");
            Bday1text2.style.display = "block";
            Bday1text2.classList.add("fade-in-fast");
            Bday1text2.classList.add("user2");
        }, 3000);

setTimeout(() => {
            const Bday1text3 = document.getElementById("Bday1text3");
            Bday1text3.style.display = "block";
            Bday1text3.classList.add("fade-in-fast");
            Bday1text3.classList.add("user2");
        }, 5500);

setTimeout(() => {
            const Bday1text4 = document.getElementById("Bday1text4");
            Bday1text4.style.display = "block";
            Bday1text4.classList.add("fade-in-fast");
            Bday1text4.classList.add("user2");
        }, 7000);

setTimeout(() => {
            const Bday1text5 = document.getElementById("Bday1text5");
            Bday1text5.style.display = "block";
            Bday1text5.classList.add("fade-in-fast");
            Bday1text5.classList.add("user2");
        }, 9000);

setTimeout(() => {
            const button1C2 = document.getElementById("button1C2");
            button1C2.style.display = "block";
            button1C2.classList.add("fade-in-fast");
            button1C2.classList.add("button1C");
        }, 10500);
}

function index2text1() {
    setTimeout(() => {
            const index2text1 = document.getElementById("index2text1");
            index2text1.style.display = "block";
            index2text1.classList.add("fade-in-fast");
        }, 500);
    setTimeout(() => {
            const index2text2 = document.getElementById("index2text2");
            index2text2.style.display = "block";
            index2text2.classList.add("fade-in-fast");
        }, 3000);
     setTimeout(() => {
            const index2text3 = document.getElementById("index2text3");
            index2text3.style.display = "block";
            index2text3.classList.add("fade-in-fast");
        }, 5000);
}

function watchFace() {
    document.getElementById('watchFaceImage').style.display="block"
    const sound = new Audio('watch.mp3');
    sound.play();
    setTimeout(() => {
        const Bday1text7 = document.getElementById("Bday1text7");
            Bday1text7.style.display = "block";
            Bday1text7.classList.add("fade-in-fast");
            Bday1text7.classList.add("user2");
    }, 4500);
    setTimeout(() => {
        const Bday1text8 = document.getElementById("Bday1text8");
            Bday1text8.style.display = "block";
            Bday1text8.classList.add("fade-in-fast");
            Bday1text8.classList.add("user2");
    }, 8000);
     setTimeout(() => {
        const Bday1text9 = document.getElementById("Bday1text9");
            Bday1text9.style.display = "block";
            Bday1text9.classList.add("fade-in-fast");
            Bday1text9.classList.add("user2");
    }, 12500);
     setTimeout(() => {
        const Bday1text10 = document.getElementById("Bday1text10");
            Bday1text10.style.display = "block";
            Bday1text10.classList.add("fade-in-fast");
            Bday1text10.classList.add("user2");
    }, 16500);
    setTimeout(() => {
        const Bday1text11 = document.getElementById("Bday1text11");
            Bday1text11.style.display = "block";
            Bday1text11.classList.add("fade-in-fast");
            Bday1text11.classList.add("user2");
    }, 20000);
     setTimeout(() => {
        const BdayButton = document.getElementById("BdayButton");
            BdayButton.style.display = "block";
            BdayButton.classList.add("fade-in-fast");
            BdayButton.classList.add("user2");
    }, 24000);
}

function BdayButton() {
    document.getElementById('BdayButton').style.display='none';
    document.getElementById('BdayButton2').style.display='block';
}

function BdayButton2() {
    document.getElementById('BdayButton2').style.display='none';
    document.getElementById('BdayButton3').style.display='block';
}

function BdayButton3() {
    document.getElementById('BdayButton3').style.display='none';
    document.getElementById('BdayButton4').style.display='block';
}

function BdayButton4() {
    document.getElementById('BdayButton4').style.display='none';
    document.getElementById('BdayButton5').style.display='block';
}

function BdayButton5() {
    window.location.href = "page2.html";
}



function username1() {
    const username1 = document.getElementById('username1')
    username1.style.display = "block";
    username1.classList.add("fade-in");
    const username2 = document.getElementById('username2')
    username2.style.display = "block";
    username2.classList.add("fade-in");
    setTimeout(() => {
            const dateTime1 = document.getElementById("dateTime1");
            dateTime1.style.display = "block";
            dateTime1.classList.add("fade-in-fast");
        }, 2500);
    setTimeout(() => {
            const dateTime2 = document.getElementById("dateTime2");
            dateTime2.style.display = "block";
            dateTime2.classList.add("fade-in-fast");
        }, 2500);
    
    setTimeout(() => {
            const day2button1 = document.getElementById("day2button1");
            day2button1.style.display = "block";
            day2button1.classList.add("fade-in-fast");
        }, 5000);
    }



function startTyping() {
    document.getElementById('day2button1').style.display='none'
    const sound = new Audio('lettersappearing.mp3');
    sound.play();
    setTimeout(() => {
        const target = document.getElementById('u1log1');
    const lines = [
        'Google search: “why cant i sleep at night”',
        '\n\n',
        'Clicked on: 1 article, “How to Use Your ABV Screens to Improve Your Sleep!”',
        'Window duration: 20s',
        '\n\n',
        'Clicked on: 1 article, “Why you really cant sleep"'
    ];
    let line = 0;

    function typeLine() {
        let i = 0;
        function typeChar() {
            if (i < lines[line].length) {
                target.innerHTML += lines[line].charAt(i);
                i++;
                setTimeout(typeChar, 100);
            } else {
                line++;
                if (line < lines.length) {
                    target.innerHTML += "<br>";
                    setTimeout(typeLine, 1000); 
                } else {
            setTimeout(() => {
            window.open("popup1.html", "_blank", "width=800,height=600");
                }, 500);
            setTimeout(() => {
                document.getElementById('nextButtonDiv').style.display='block'
                document.getElementById('day2nextbutton').style.display='block'
            }, 1000);
                }
            }
        }
        typeChar();
    }
    target.innerHTML = "";
    typeLine();
    }, 500);
    
}


function u2log1() {
    document.getElementById('nextButtonDiv').style.display='none';
    document.getElementById('day2nextbutton').style.display='none';
    const sound = new Audio('lettersappearing.mp3');
    sound.play();
    setTimeout(() => {
        const target = document.getElementById('u2log1');
    const lines = [
        'Article: "why you really cant sleep"',
        '\n\n',
        '1 new viewer',
        '1 profile visit',
        '1 new message',
    ];
    let line = 0;

    function typeLine() {
        let i = 0;
        function typeChar() {
            if (i < lines[line].length) {
                target.innerHTML += lines[line].charAt(i);
                i++;
                setTimeout(typeChar, 100);
            } else {
                line++;
                if (line < lines.length) {
                    target.innerHTML += "<br>";
                    setTimeout(typeLine, 1000); 
                } else {
            setTimeout(() => {
            document.getElementById('day2button2').style.display='block';
                }, 500);
                }
            }
        }
        typeChar();
    }
    target.innerHTML = "";
    typeLine();
    }, 500);
    
}

function messagepopup() {
window.open("text1popup.html", "_blank", "width=800,height=400");
 document.getElementById('day2button2').style.display='none';   
 const day2button3 = document.getElementById('day2button3');
 day2button3.style.display='block';
 day2button3.classList.add('BdayButton'); 
day2button3.classList.add('fade-in-fast'); 
}

function u2log2() {
    document.getElementById('day2button3').style.display='none';
     setTimeout(() => {
    const sound = new Audio('lettersappearing.mp3');
    sound.play();
   }, 250);
    setTimeout(() => {
         const target = document.getElementById('u2log2');
    const lines = [
        'Messaging ended.',
        '\n\n',
        'Clicked on: 1 profile, "SleeplessKnight28"',
    ];
    let line = 0;

    function typeLine() {
        let i = 0;
        function typeChar() {
            if (i < lines[line].length) {
                target.innerHTML += lines[line].charAt(i);
                i++;
                setTimeout(typeChar, 100);
            } else {
                line++;
                if (line < lines.length) {
                    target.innerHTML += "<br>";
                    setTimeout(typeLine, 1000); 
                } else {
            setTimeout(() => {
           window.open("SleeplessKnight28.html", "_blank", "width=800,height=600");
                }, 500);
             setTimeout(() => {
          document.getElementById('day2button4').style.display='block';
           document.getElementById('day2button4').classList.add('BdayButton');
          document.getElementById('day2button4').classList.add('fade-in-fast');
                }, 2500);
                }
            }
        }
        typeChar();
    }
    target.innerHTML = "";
    typeLine();
    }, 500);
   
}


function day3switch() {
   document.getElementById('day2button4').style.display='none';
   setTimeout(() => {
    const sound = new Audio('lettersappearing.mp3');
    sound.play();
   }, 250);
    const dateTime3 = document.getElementById("dateTime3");
    dateTime3.style.display = "block";
    dateTime3.classList.add("fade-in-fast");
    setTimeout(() => {
        const target = document.getElementById('u1log2');
    const lines = [
        'Clicked on: 1 message history',
        'Closed: 1 message history',
        '\n\n',
        'Clicked on: 1 profile, "PhantomFighter"',
    ];
    let line = 0;

    function typeLine() {
        let i = 0;
        function typeChar() {
            if (i < lines[line].length) {
                target.innerHTML += lines[line].charAt(i);
                i++;
                setTimeout(typeChar, 100);
            } else {
                line++;
                if (line < lines.length) {
                    target.innerHTML += "<br>";
                    setTimeout(typeLine, 1000); 
                } else {
            setTimeout(() => {
           window.open("PhantomFighter.html", "_blank", "width=1200,height=600");
                }, 500);
             setTimeout(() => {
          document.getElementById('day2button5').style.display='block';
          document.getElementById('day2button5').classList.add('BdayButton');
          document.getElementById('day2button5').classList.add('fade-in-fast');
                }, 2500);
                }
            }
        }
        typeChar();
    }
    target.innerHTML = "";
    typeLine();
    }, 500);
}

function skpost1() {
    window.location.href= 'skpost1.html';
}

function skpost2() {
     window.location.href= 'skpost2.html';
}

function skpost3() {
    window.location.href= 'skpost3.html';
}

function pfpost1() {
    window.location.href= 'pfpost1.html';
}

function pfpost2() {
     window.location.href= 'pfpost2.html';
}

function pfpost3() {
    window.location.href= 'pfpost3.html';
}

function day3switchB() {
   document.getElementById('day2button5').style.display='none';
    const dateTime3 = document.getElementById("dateTime4");
    dateTime3.style.display = "block";
    dateTime3.classList.add("fade-in-fast");
   setTimeout(() => {
    const sound = new Audio('lettersappearing.mp3');
    sound.play();
   }, 250);
    setTimeout(() => {
        const target = document.getElementById('u2log3');
    const lines = [
        '1 new message',
    ];
    let line = 0;

    function typeLine() {
        let i = 0;
        function typeChar() {
            if (i < lines[line].length) {
                target.innerHTML += lines[line].charAt(i);
                i++;
                setTimeout(typeChar, 100);
            } else {
                line++;
                if (line < lines.length) {
                    target.innerHTML += "<br>";
                    setTimeout(typeLine, 1000); 
                } else {
            setTimeout(() => {
           window.open("text2popup.html", "_blank", "width=1200,height=600");
                }, 2000);
            setTimeout(() => {
            document.getElementById('day2button6').style.display='block';
          document.getElementById('day2button6').classList.add('actionbuttons');
          document.getElementById('day2button6').classList.add('fade-in-fast');
                }, 2500);
                }
            }
        }
        typeChar();
    }
    target.innerHTML = "";
    typeLine();
    }, 500);
}




function lastpage() {
    document.getElementById('day2button6').style.display='none';
     setTimeout(() => {
    const sound = new Audio('lettersappearing.mp3');
    sound.play();
   }, 250);
    setTimeout(() => {
        const target = document.getElementById('u1log3');
    const lines = [
        'Messaging ended.',
        '1 invite received',
    ];
    let line = 0;

    function typeLine() {
        let i = 0;
        function typeChar() {
            if (i < lines[line].length) {
                target.innerHTML += lines[line].charAt(i);
                i++;
                setTimeout(typeChar, 100);
            } else {
                line++;
                if (line < lines.length) {
                    target.innerHTML += "<br>";
                    setTimeout(typeLine, 1000); 
                } else {
            setTimeout(() => {
           window.open("page3.html", "_blank", "width=1200,height=600");
                }, 2000);
                }
            }
        }
        typeChar();
    }
    target.innerHTML = "";
    typeLine();
    }, 500);


   
}

function lastText() {
    document.getElementById('finalButton').style.display='none';
    const finalText = document.getElementById("finalText");
    finalText.style.display = "block";
    finalText.classList.add("fade-in-fast");
     const sound = new Audio('gamesave.mp3');
    sound.play();
}
