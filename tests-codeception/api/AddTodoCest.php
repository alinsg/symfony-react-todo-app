<?php
namespace App\Tests;
use App\Tests\ApiTester;
class AddTodoCest
{
    public function _before(ApiTester $I)
    {
    }

    public function testSuccess(ApiTester $I)
    {
        $I->wantTo('Successfully add a Todo in database');
        $request = [
            'text' => 'Test Todo from Codeception'
        ];
        $I->sendPost('/api/todo/create', json_encode($request));
        $I->seeResponseCodeIs(200);
        $I->seeHttpHeader('Content-Type', 'application/json');
        $I->seeResponseContainsJson([
            'text' => 'Test Todo from Codeception',
            'status' => false
        ]);
    }

    public function testFail(ApiTester $I)
    {
        $I->wantTo('Fail to add a Todo in database');
        $request = [
            'test' => 'Test Todo from Codeception that fails'
        ];
        $I->sendPost('/api/todo/create', json_encode($request));
        $I->seeResponseCodeIs(500);
    }

}
