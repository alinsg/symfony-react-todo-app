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
     * @var string $text
     * @ORM\Column(type="string", length=255)
     */
    private string $text;

    /**
     * @var bool $status
     * @ORM\Column(type="boolean", options={"default": false})
     */
    private bool $status;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }


    #[ArrayShape(['id' => "int", 'text' => "string", 'status' => "bool"])]
    public function toArray(): array
    {
        return ['id' => $this->id, 'text' => $this->text, 'status' => $this->status];
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
