<?php

namespace App\Controller;

use App\Repository\TodoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/todo', name: 'todo')]
class TodoController extends AbstractController
{
    private EntityManagerInterface $entityManager;
    private TodoRepository $todoRepository;

    public function __construct(EntityManagerInterface $entityManager, TodoRepository $todoRepository)
    {

        $this->entityManager = $entityManager;
        $this->todoRepository = $todoRepository;
    }

    /**
     * Get the entries from the database using the repository
     * Create an empty array
     * Iterate through the response from the To do Repository then add to created array the result of a Todo's toArray method
     * Then use the $this->json($arrayOfTodos) to create a json response from the server
     */
    #[Route('/read', name: 'todo')]
    public function index(): Response
    {
        $todos = $this->todoRepository->findAll();
        $arrayOfTodos = [];
        foreach ($todos as $todo) {
            array_push($arrayOfTodos, $todo->toArray());
        }
        return $this->json($arrayOfTodos);
    }
}
