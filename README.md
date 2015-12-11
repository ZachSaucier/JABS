Javascript Agent-Based Simulator (JABS)
=======================================

- ## [Demo](http://zachsaucier.com/procedural-agent-based-simulator.html)
- ## [Full write-up](https://docs.google.com/document/d/1I0ctd1ReomhJovdmCn4UXSDG27eqVErH-VnQME4F0Tc/edit?usp=sharing)
- ## [Slides](https://docs.google.com/presentation/d/1qOFQrXN6zwaQEadEYReTpSJjO1kMXYrFbFu_cvg6bF8/edit?usp=sharing) (paper summary)

### Introduction

Agent based modeling is a way of modeling multi-agent systems in a way that bases computation, and therefore action, around agents and the environment around them including other agents. It is used to break down complex behaviors and like swarms and flocks into smaller, more easily computable actions based on predefined behaviors. They can be used for research by simulating real world behaviors or more informally for games or visualizations.

I used Javascript because I wanted to make a base platform to develop small, portable games and visualizations that use agent-based interaction. I am not attempting to create a full fledged agent based simulation capable of having thousands of agents interacting. But, using this base that I have created, one could create basic swarming, flocking, or similar behaviors with relatively little addition.

I also make use of procedural generation to create the agent types. I did this primarily for my own benefit of learning procedural generation but it also shows the diversity of options available using the agent format I have created.

Please give feedback, report bugs, and propose new loader ideas!

____

### Summary

In the full write up above I go into more detail about each of these bullets, but in summary I approached the problem of creating a minimal JS agent-based simulator in the following way:
- Create an agent structure to use - A standard set of properties needs to be applied to all agents regardless of type in order to allow standardization of detection, movement, and placement inside of the simulated world.
- Procedurally generate random agent types and agents - In order to further increase my skill in creating procedurally generative systems, I made a way to randomly create new types within some predefined bounds.
- Allow these agents to interact based on their types if they are within vision - This is the main point of agent-based modeling. I had to determine exactly how agents would detect each other and what the bounds of their reactions were. This allows the actual behaviors to be procedurally generated. 
- Place these agents inside of a 2D grid using clusters for lookup performance - Similar to how Iain Couzin used 3D clusters to make lookup of agents more performant, I needed to create a system to do the same in a 2D world. 
- Display these agents using a Canvas - I needed to create a relatively straightforward way of visualizing the agents and the world they are in that is separate from the actual simulation to retain separation of concerns.


___

Follow me: [Twitter](http://www.twitter.com/codrops), [CodePen](http://codepen.io/Zeaklous), [GitHub](https://github.com/ZachSaucier)