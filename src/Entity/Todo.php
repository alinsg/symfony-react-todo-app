<?php

namespace App\Entity;

use App\Repository\TodoRepository;
use Doctrine\ORM\Mapping as ORM;
use JetBrains\PhpStorm\ArrayShape;

/**
 * @ORM\Entity(repositoryClass=TodoRepository::class)
 */
class Todo
{
    /**
     * @var int $id
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @var string $name
     * @ORM\Column(type="string", length=255)
     */
    private string $name;

    /**
     * @var bool $status
     * @ORM\Column(type="boolean", options={"default": false})
     */
    private bool $status;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }


    #[ArrayShape(['id' => "int", 'task' => "string", 'status' => "bool"])]
    public function toArray(): array
    {
        return ['id' => $this->id, 'task' => $this->name, 'status' => $this->status];
    }

    /**
     * @return bool
     */
    public function getStatus(): bool
    {
        return $this->status;
    }

    /**
     * @param bool $status
     */
    public function setStatus(bool $status=false): void
    {
        $this->status = $status;
    }
}
