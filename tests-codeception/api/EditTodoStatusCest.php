<?php
namespace App\Tests;
use App\Tests\ApiTester;

class EditTodoStatusCest
{
    public function _before(ApiTester $I)
    {
        $request = [
            'status' => false
        ];
        $I->sendPut('/api/todo/update/status/1', json_encode($request));
    }

    public function testSuccessMarkTrue(ApiTester $I)
    {
        $I->wantTo('Successfully mark a Todo status as done');
        $request = [
            'status' => true
        ];
        $I->sendPut('/api/todo/update/status/1', json_encode($request));
        $I->seeResponseCodeIs(200);
        $I->seeHttpHeader('Content-Type', 'application/json');
        $I->seeResponseContainsJson([
            'id' => 1,
            'text' => 'Codeception update status Todo',
            'status' => true
        ]);
    }

    public function testSuccessMarkFalse(ApiTester $I)
    {
        $I->wantTo('Successfully mark a Todo status as not done');
        $request = [
            'status' => false
        ];
        $I->sendPut('/api/todo/update/status/1', json_encode($request));
        $I->seeResponseCodeIs(200);
        $I->seeHttpHeader('Content-Type', 'application/json');
        $I->seeResponseContainsJson([
            'id' => 1,
            'text' => 'Codeception update status Todo',
            'status' => false
        ]);
    }

    public function testFail(ApiTester $I)
    {
        $I->wantTo('Unsuccessfully mark a Todo status as done');
        $request = [
            'statuus' => true
        ];
        $I->sendPut('/api/todo/update/status/1', json_encode($request));
        $I->seeResponseCodeIs(500);
    }

    public function _after(ApiTester $I)
    {
        $request = [
            'status' => false
        ];
        $I->sendPut('/api/todo/update/status/1', json_encode($request));
    }
}
