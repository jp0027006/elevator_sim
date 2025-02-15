# Elevator System with Vanilla JS

Welcome to the **Elevator System** built with pure **Vanilla JavaScript**! 🚀 This project simulates an elevator system in a 10-floor building with 5 elevators, providing a smooth and interactive experience. 

## 📱 Tech Stack
<p>
  <ul>
    <li><strong>HTML/CSS</strong> for layout and design.</li>
    <li><strong>Vanilla JavaScript</strong> for handling logic and interactions.</li>
  </ul>
</p>

<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
</a>
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
  </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
  </a> 
</p>

## 🎮 Demo
You can try out this elevator system by visiting the following link (coming soon).

## 🛠️ Features

### **1. Base Features** 
- A building with **10 floors** (including ground floor) and **5 elevators** 🏢.
- Each floor has a **green button** to call an elevator 🔘.

### **2. Calling an Elevator** 
- **Press a floor button** → The button turns **red** and text changes to "waiting" ⏳.
- The system identifies the **closest available elevator** and sends it to your floor 🛗.
  - All elevators could be **occupied** – no worries, we queue your call and handle it efficiently.
- The elevator moves **smoothly** towards your floor 🚶‍♂️.
- While the elevator is moving, it turns **red** 🔴 to show it’s in transit.

### **3. Elevator Reaches the Floor** 
- **Ding!** 🎶 A sound plays when the elevator reaches your floor.
- The elevator color switches back to **green** 🟢, indicating it has arrived.
- After 2 seconds, the elevator's color goes back to **black** and the button is reset to **green** with text saying "call" 💬.
- Wait, it gets better – the elevator is ready to handle the next call!

## 🕹️ How It Works

1. **Press the button** on any floor to call an elevator.
2. The system checks which elevator is available and sends the closest one.
3. The elevator moves smoothly with a **red** indicator, making its way to your floor.
4. Once it reaches your floor, **ding** 🎵 – it’s here! The elevator color turns **green**.
5. After a short pause (2 seconds), the elevator resets and the call button is ready for the next request.

## ⏱️ Measured Time
- The system tracks how long it takes for an elevator to reach the desired floor. This feature gives you real-time performance insights!
