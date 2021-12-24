<?php
namespace App\Tests;
use App\Tests\ApiTester;
class DeleteTodoCest
{
    public function _before(ApiTester $I)
    {
        $request = [
            'text' => 'Codeception Todo to delete'
        ];
        $I->sendPost('/api/todo/create', json_encode($request));
    }

    public function testSuccess(ApiTester $I)
    {
        $I->wantTo('Successfully remove a Todo from database');
        $result = $I->grabFromDatabase('todo', 'id', ['text' => 'Codeception Todo to delete']);
        $I->sendDelete('/api/todo/delete/'.$result);
        $I->seeResponseCodeIs(200);
        $I->seeHttpHeader('Content-Type', 'application/json');
        $I->seeResponseContainsJson([
            'message' => 'Todo was deleted successfully'
        ]);
    }

    public function testFail(ApiTester $I)
    {
        $I->wantTo('Unsuccessfully remove a Todo from database');
        $numberOfRecords = $I->grabNumRecords('todo');
        $I->sendDelete('/api/todo/delete/'.$numberOfRecords);
        $I->seeResponseCodeIs(404);
    }
}
