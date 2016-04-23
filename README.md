# Value Objects Bundle #

Symfony bundle to integrate value objects from the nicolopignatelli/valueobjects package


## Usage instructions ##

1. Install via composer...

        $ composer require cubicmushroom/value-objects-bundle {version}
        
1. Register the bundle with Symfony in the `app/AppKernel.php` file...

        class AppKernel extends Kernel
        {
            public function registerBundles()
            {
                $bundles = [
                    // ...
                    new \CubicMushroom\Symfony\ValueObjectsBundle\CMValueObjectsBundle(),
                    // ...
                ];
            }
        }

        


## Which version do I use? ##

This Package's minor releases follow along with those of the Symfony framework, i.e. 2.7.x should be installed for 
Symfony 2.7.x projects, 2.8.x should be installed for Symfony 2.8.x projects, etc.