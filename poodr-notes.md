## Chapter 1 - Object Oriented Design
>	Object-oriented design (OOD) requires that you shift from thinking of the world as a collection of predefined procedures to modeling the world as a series of messages that pass between objects

Why choose OOD?
- OOD techniques produce cost-effective software that makes programming more enjoyable
- The purpose of design is reduce the cost of change and create applications that are easily adaptable 
What is OOD?
- Object-oriented applications consist of *objects* that interact by passing *messages* to produce the behavior of the application. 
- Goal is to *manage dependencies* aka arrange dependencies so that objects can tolerate change.
- *Design* is the arrangement of code within an application.

>The purpose of design is to allow you to do design later, and it's primary goal is to reduce the cost of change.

[SOLID Design Principles](https://www.freecodecamp.org/news/solid-design-principles-in-software-development/)
- **S**ingle Responsibility: a class, module, or function should have only one reason to change, meaning it should only do one thing.
- **O**pen-Closed: a class, module, or function should be open for extension but closed for modification (inherit instead of modify)
- **L**iskov Substitution: a child class/subclass should be substitutable for it's parent class/super class. 
- **I**nterface Segregation: many smaller components with specific functionality are better than one large interface where clients are forced to implement methods they do not use.
- **D**ependency Inversion: write code that depends on abstractions, rather than concrete implementations.

[DRY (**D**on't **R**epeat **Y**ourself)](https://media.pragprog.com/titles/tpp20/dry.pdf)
- "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."
- reduce redundancy and repetition, replace it with abstractions

[LoD (**L**aw **o**f **D**emeter)](https://www.ccs.neu.edu/home/lieber/LoD.html)
- "Each unit should have only limited knowledge about other units: only units 'closely' related to the current unit. Or: Each unit should only talk to its friends; Don't talk to strangers."
