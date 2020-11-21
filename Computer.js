// This function builds a computer!
    //copy and paste code into new snippets
    //run code (command + enter)
    // run `const comp1 = new Computer('someBrand', 'someModel')` in console!
    // run `console.log(comp1.__proto__)` to see how you can upgrade your new computer :D
    // I built ocmputers with this for way too long, its was fun lol!

    class Computer {
      constructor(brand, model)  {
        this.brand = brand;
        this.model = model;
        this.stickers;
        this.ram = '4GB';
        this.hardDrive = {};
        this.hardDrive.type = 'Thumb Drive';
        this.hardDrive.diskSpace = '2GB';
      }

        changeColor(color) {
            this.color = color
        }

        addStickers(value) {
            if (this.stickers === undefined) {
                this.stickers = 0;
            }
            this.stickers = this.stickers + value;
        }

        increaseRAM(value) {
            var newValue = parseInt(this.ram.slice(0, this.ram.length - 2)) + value;
            this.ram = JSON.stringify(newValue).concat('GB');
        }

        increaseMem(value) {
            var newValue = parseInt(this.hardDrive.diskSpace.slice(0, this.hardDrive.diskSpace.length - 2)) + value;
            this.hardDrive.diskSpace = JSON.stringify(newValue).concat('GB');
        }

        changeHD(type, gb) {
            this.hardDrive.type = type;
            this.hardDrive.diskSpace = JSON.stringify(gb).concat('GB');
        }
    };

