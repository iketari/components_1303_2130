## Typedefs

<dl>
<dt><a href="#ChatData">ChatData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ChatMessage">ChatMessage</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="ChatData"></a>

## ChatData : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user | <code>string</code> | имя текущего пользователя |
| messages | [<code>Array.&lt;ChatMessage&gt;</code>](#ChatMessage) | масси сообщений в чате |

<a name="ChatMessage"></a>

## ChatMessage : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Текст сообщения |
| name | <code>string</code> | имя отправителя сообщения |

