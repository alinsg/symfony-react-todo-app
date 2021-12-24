<?php
namespace App\Tests;
use App\Tests\ApiTester;
class ReadTodosCest
{
    public function testSuccess(ApiTester $I)
    {
        $I->wantTo('Successfully retrieve todos from database');
        $numberOfDbRecords = $I->grabNumRecords('todo');
        $requestData = $I->sendGet('/api/todo/read');
        $numberOfRequestRecords = count(json_decode($requestData));
        $I->seeResponseCodeIs(200);
        $I->seeHttpHeader('Content-Type', 'application/json');
        $I->assertEquals($numberOfDbRecords, $numberOfRequestRecords);
    }
}
