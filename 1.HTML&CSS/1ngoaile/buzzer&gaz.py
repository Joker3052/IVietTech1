import RPi.GPIO as GPIO
from time import sleep

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

SPICLK = 11
SPIMISO = 9
SPIMOSI = 10
SPICS = 8
mq2_dpin = 26
mq2_apin = 0
buzzer = 23

GPIO.setup(SPICLK, GPIO.OUT)
GPIO.setup(SPIMISO, GPIO.IN)
GPIO.setup(SPIMOSI, GPIO.OUT)
GPIO.setup(SPICS, GPIO.OUT)
GPIO.setup(mq2_dpin, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(buzzer, GPIO.OUT)

def readadc(adcnum, clockpin, mosipin, misopin, cspin):
    if ((adcnum > 7) or (adcnum < 0)):
        return -1
    GPIO.output(cspin, True)

    GPIO.output(clockpin, False)
    GPIO.output(cspin, False)

    commandout = adcnum
    commandout |= 0x18
    commandout <<= 3
    for i in range(5):
        if (commandout & 0x80):
            GPIO.output(mosipin, True)
        else:
            GPIO.output(mosipin, False)
        commandout <<= 1
        GPIO.output(clockpin, True)
        GPIO.output(clockpin, False)

    adcout = 0
    for i in range(12):
        GPIO.output(clockpin, True)
        GPIO.output(clockpin, False)
        adcout <<= 1
        if (GPIO.input(misopin)):
            adcout |= 0x1

    GPIO.output(cspin, True)

    adcout >>= 1
    return adcout

def main():
    print("Please wait...")
    sleep(20)
    while True:
        COlevel = readadc(mq2_apin, SPICLK, SPIMOSI, SPIMISO, SPICS)

        if GPIO.input(mq2_dpin):
            print("Gas not leaking")
            GPIO.output(buzzer, GPIO.LOW)
            sleep(0.5)
        else:
            print("Gas leakage")
            print("Current Gas AD value = " + str("%.2f" % ((COlevel / 1024.) * 3.3)) + " V")
            GPIO.output(buzzer, GPIO.HIGH)
            sleep(0.5)

try:
    main()
except KeyboardInterrupt:
    pass

GPIO.cleanup()
