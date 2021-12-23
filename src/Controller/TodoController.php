<?php

namespace App\Controller;

use App\Entity\Todo;
use App\Repository\TodoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/todo', name: 'api_todo')]
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
    #[Route('/read', name: 'api_todo_read_all', methods: ["GET"])]
    public function index(): Response
    {
        $todos = $this->todoRepository->findAll();
        $arrayOfTodos = [];
        foreach ($todos as $todo) {
            $arrayOfTodos[] = $todo->toArray();
        }
        return $this->json($arrayOfTodos);
    }

    #[Route('/create', name: 'api_todo_create', methods: ["POST"])]
    public function create(Request $request): JsonResponse
    {
        $content = json_decode($request->getContent());
        $todo = new Todo();
        $todo->setText($content->task);

        try {
            $this->entityManager->persist($todo);
            $this->entityManager->flush();
        } catch (Exception $exception) {
            //todo to add error message
        }
        return $this->json($todo->toArray());
    }

    #[Route('/update/text/{id}', name: 'api_todo_update', methods: ["PUT"])]
    public function update(Request $request, Todo $todo): JsonResponse
    {
        $content = json_decode($request->getContent());
        $todo->setText($content->text);
        try {
            $this->entityManager->flush();
        } catch (Exception $exception) {
            //todo to add error message
        }
        return $this->json($todo->toArray());
    }

    /**
     * @throws Exception
     */
    #[Route('/update/status/{id}', name: 'api_todo_update_status', methods: ["PUT"])]
    public function updateStatus(Request $request, Todo $todo): JsonResponse
    {
        $content = json_decode($request->getContent());
        dump(json_decode($request->getContent()));
        $todo->setStatus($content->status);
        try {
            $this->entityManager->flush();
        } catch (Exception $exception) {
            throw new Exception($exception->getMessage());
        }
        dump($todo);
        return $this->json($todo->toArray());
    }

    #[Route('/delete/{id}', name: 'api_todo_delete', methods: ["DELETE"])]
    public function delete(Todo $todo): JsonResponse
    {
        if (!$todo) {
            throw $this->createNotFoundException('No todo found!');
        }

        try {
            $this->entityManager->remove($todo);
            $this->entityManager->flush();
        } catch (Exception $exception) {
            //todo to add error message
        }
        return $this->json([
            'message' => 'Todo was deleted successfully'
        ]);
    }
}
