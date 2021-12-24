<?php
namespace App\Tests;
use App\Tests\ApiTester;
class EditTodoTextCest
{
    public function _before(ApiTester $I)
    {
        $requestForText = [
            'text' => 'Codeception update text Todo'
        ];
        $I->sendPut('/api/todo/update/text/1', json_encode($requestForText));
        $requestForStatus = [
            'status' => false
        ];
        $I->sendPut('/api/todo/update/status/1', json_encode($requestForStatus));

    }

    public function testSuccess(ApiTester $I)
    {
        $I->wantTo('Successfully edit a Todo text');
        $request = [
            'text' => 'Codeception update text Todo successfully'
        ];
        $I->sendPut('/api/todo/update/text/1', json_encode($request));
        $I->seeResponseCodeIs(200);
        $I->seeHttpHeader('Content-Type', 'application/json');
        $I->seeResponseContainsJson([
            'id' => 1,
            'text' => 'Codeception update text Todo successfully',
            'status' => false
        ]);
    }

    public function testFail(ApiTester $I)
    {
        $I->wantTo('Unsuccessfully edit a Todo text');
        $request = [
            'texxt' => 'Codeception update text Todo successfully'
        ];
        $I->sendPut('/api/todo/update/text/1', json_encode($request));
        $I->seeResponseCodeIs(500);
    }

    public function _after(ApiTester $I)
    {
        $request = [
            'text' => 'Codeception update text Todo'
        ];
        $I->sendPut('/api/todo/update/text/1', json_encode($request));
    }
}
