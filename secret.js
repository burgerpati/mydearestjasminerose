const correctPasscode = '246813579';

function checkPasscode() {
    const input = document.getElementById('passcode-input').value;
    const errorMessage = document.getElementById('error-message');
    const passcodeContainer = document.getElementById('passcode-container');
    const envelopeContainer = document.getElementById('envelope-container');

    if (input === correctPasscode) {
        passcodeContainer.style.display = 'none';
        envelopeContainer.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
}

function openLetter() {
    const flap = document.querySelector('.flap');
    const letter = document.querySelector('.letter');
    const envelope = document.querySelector('.envelope');
    
    flap.style.transform = 'translateX(-50%) rotateX(180deg)';
    letter.style.transform = 'translateY(0)';
    envelope.style.transform = 'rotateY(0deg)';
}
