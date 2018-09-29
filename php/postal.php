<?php
$wsdlurl = 'https://tracking.russianpost.ru/rtm34?wsdl';
$client2 = '';
$barcode = "111111";
$login = "my_login";
$password = "my_password";
$request = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:oper="http://russianpost.org/operationhistory" xmlns:data="http://russianpost.org/operationhistory/data" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:data1="http://www.russianpost.org/RTM/DataExchangeESPP/Data">
   <soap:Header/>
   <soap:Body>
      <oper:PostalOrderEventsForMail>
         <!--Optional:-->
         <data:AuthorizationHeader soapenv:mustUnderstand="">
            <data:login>'.$login.'</data:login>
            <data:password>'.$password.'</data:password>
         </data:AuthorizationHeader>
         <!--Optional:-->
         <data1:PostalOrderEventsForMailInput Barcode="'.$barcode.'" Language=""/>
      </oper:PostalOrderEventsForMail>
   </soap:Body>
</soap:Envelope>';

$client = new SoapClient($wsdlurl,  array('trace' => 1, 'soap_version' => SOAP_1_2));

echo '<textarea>'.$client->__doRequest($request, "https://tracking.russianpost.ru/rtm34", "PostalOrderEventsForMail", SOAP_1_2).'</textarea>';
?>