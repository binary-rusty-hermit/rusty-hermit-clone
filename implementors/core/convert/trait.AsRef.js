(function() {var implementors = {};
implementors["ascii"] = [{"text":"impl AsRef&lt;[u8]&gt; for AsciiStr","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for AsciiStr","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[AsciiChar]&gt; for AsciiStr","synthetic":false,"types":[]},{"text":"impl AsRef&lt;AsciiStr&gt; for AsciiStr","synthetic":false,"types":[]},{"text":"impl AsRef&lt;AsciiStr&gt; for [AsciiChar]","synthetic":false,"types":[]},{"text":"impl AsRef&lt;AsciiStr&gt; for AsciiChar","synthetic":false,"types":[]},{"text":"impl AsRef&lt;AsciiStr&gt; for AsciiString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[AsciiChar]&gt; for AsciiString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for AsciiString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for AsciiString","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl AsRef&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T&gt; AsRef&lt;T&gt; for Owned&lt;T&gt;","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; AsRef&lt;Target&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;str&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;str&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R, Target&gt; AsRef&lt;[Target]&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;[Target]&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;[Target]&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["smoltcp"] = [{"text":"impl&lt;T:&nbsp;AsRef&lt;[u8]&gt;&gt; AsRef&lt;[u8]&gt; for Frame&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;[u8]&gt;&gt; AsRef&lt;[u8]&gt; for Packet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;[u8]&gt;&gt; AsRef&lt;[u8]&gt; for Packet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;[u8]&gt;&gt; AsRef&lt;[u8]&gt; for Packet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;[u8]&gt;&gt; AsRef&lt;[u8]&gt; for Packet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;[u8]&gt;&gt; AsRef&lt;[u8]&gt; for Packet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;[u8]&gt;&gt; AsRef&lt;[u8]&gt; for Packet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;[u8]&gt;&gt; AsRef&lt;[u8]&gt; for Packet&lt;T&gt;","synthetic":false,"types":[]}];
implementors["tiny_http"] = [{"text":"impl AsRef&lt;u16&gt; for StatusCode","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for TinyVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl AsRef&lt;str&gt; for Url","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()