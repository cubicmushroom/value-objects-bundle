<?php

namespace CubicMushroom\Symfony\ValueObjectsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('CMValueObjectsBundle:Default:index.html.twig', array('name' => $name));
    }
}
