    // Calculate Volume of House; Given Wall Heigth, Width, Depth (Roof Peak Side), Roof Peak

    function livingVolume (width, depth, height) {
        return width * depth * height;
    }

    function triangleArea (sideA, sideB, sideC) {
        let s = (sideA + sideB + sideC) / 2;
        return Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
    }

    function roofVolume (depth, width, sweep) {
        return triangleArea(depth, sweep, sweep) * width;
    }

    function houseVolume (width, depth, height, sweep) {
        let livingVol = livingVolume(width,depth, height);
        let roofVol = roofVolume(depth, width, sweep);
        return livingVol + roofVol;
    }

    let prompt = require('prompt-sync')();

    let Hwidth = parseFloat(prompt('Please Enter House Width: '));
    let Hdepth = parseFloat(prompt('Please Enter House Depth (Roof Peak Side): '));
    let Hheight = parseFloat(prompt('Please Enter House Wall Height: '));
    let Hsweep = parseFloat(prompt('Please Enter Roof Sweep: '));

    console.log('House Volume = ' + houseVolume(Hwidth,Hdepth,Hheight,Hsweep));