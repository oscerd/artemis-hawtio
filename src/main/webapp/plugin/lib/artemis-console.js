/*
 Licensed to the Apache Software Foundation (ASF) under one or more
 contributor license agreements.  See the NOTICE file distributed with
 this work for additional information regarding copyright ownership.
 The ASF licenses this file to You under the Apache License, Version 2.0
 (the "License"); you may not use this file except in compliance with
 the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 Architecture
 */
function ArtemisConsole() {

   var jmsServerbean = "org.apache.activemq.artemis:module=JMS,type=Server";

   this.getServerAttributes = function (jolokia) {
      var req1 = { type: "read", mbean: "org.apache.activemq.artemis:module=Core,type=Server"};
      return jolokia.request(req1, {method: "post"});
   };

   this.createQueue = function (jolokia, name, method) {
      jolokia.execute(jmsServerbean, "createQueue(java.lang.String,java.lang.String,java.lang.String,boolean)", name, null, null, true, method);
   };

   this.deleteQueue = function (jolokia, name, method) {
      jolokia.execute(jmsServerbean, "destroyQueue(java.lang.String)", name,  method);
   };

   this.purgeQueue = function (jolokia, name, method) {
      //todo
   };

   this.createTopic = function (jolokia, name, method) {
      jolokia.execute(jmsServerbean, "createTopic(java.lang.String,java.lang.String)", name, null, method);
   };

   this.deleteTopic = function (jolokia, name, method) {
      jolokia.execute(jmsServerbean, "destroyTopic(java.lang.String)", name, method);
   };
}

function getServerAttributes() {
   var console = new ArtemisConsole();
   return console.getVersion(new Jolokia("http://localhost:8161/jolokia/"));
}




