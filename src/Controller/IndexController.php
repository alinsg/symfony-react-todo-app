<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(): Response
    {
        $test = [
            "first test" => "some text 1",
            "second test" => "some text 2",
            "third test" => "some text 3"
        ];

        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
            'testList' => $test
        ]);
    }
}
