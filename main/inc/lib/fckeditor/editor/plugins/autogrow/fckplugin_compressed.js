﻿var FCKAutoGrow={MIN_HEIGHT:window.frameElement.offsetHeight,Check:function(){var A=FCKAutoGrow.GetHeightDelta();if (A!=0){var B=window.frameElement.offsetHeight+A;B=FCKAutoGrow.GetEffectiveHeight(B);if (B!=window.frameElement.height){window.frameElement.style.height=B+"px";if (typeof window.onresize=='function'){window.onresize();}}}},CheckEditorStatus:function(A,B){if (B==FCK_STATUS_COMPLETE) FCKAutoGrow.Check();},GetEffectiveHeight:function(A){if (A<FCKAutoGrow.MIN_HEIGHT) A=FCKAutoGrow.MIN_HEIGHT;else{var B=FCKConfig.AutoGrowMax;if (B&&B>0&&A>B) A=B;};return A;},GetHeightDelta:function(){var A=FCK.EditorDocument;var B;var C;if (FCKBrowserInfo.IsIE){B=FCK.EditorWindow.frameElement.offsetHeight;C=A.body.scrollHeight;}else{B=FCK.EditorWindow.innerHeight;C=A.body.offsetHeight+(parseInt(FCKDomTools.GetCurrentElementStyle(A.body,'margin-top'),10)||0)+(parseInt(FCKDomTools.GetCurrentElementStyle(A.body,'margin-bottom'),10)||0);};return C-B;},SetListeners:function(){if (FCK.EditMode!=FCK_EDITMODE_WYSIWYG) return;FCK.EditorWindow.attachEvent('onscroll',FCKAutoGrow.Check);FCK.EditorDocument.attachEvent('onkeyup',FCKAutoGrow.Check);}};FCK.AttachToOnSelectionChange(FCKAutoGrow.Check);if (FCKBrowserInfo.IsIE) FCK.Events.AttachEvent('OnAfterSetHTML',FCKAutoGrow.SetListeners);FCK.Events.AttachEvent('OnStatusChange',FCKAutoGrow.CheckEditorStatus);