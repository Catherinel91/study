
<?php
<?php
// interface
// можно имплементировать несколь интерфейсов
interface Wheels  {
    public function wheels();  
}
interface Distance {
    public function distance();  
}

class Car implements Wheels, Distance {
    public function wheels() {
        echo "4 колеса";
    }
    public function distance() {
        echo "1000км";
    }
}

class Bike implements Wheels {
    public function wheels() {
        echo "2 колеса";
    }
}

$car = new Car();
$bike = new Bike();

$car->wheels();
$car->distance();

$bike->wheels();