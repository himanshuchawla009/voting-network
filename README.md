# org.block.voting
### Step 1: ###
Set up fabric developement environment using fabric-dev-servers script <br/>
Start the fabric node and generate a peer Admin card.
### Step 2: ###
Install the runtime chaincode on fabric peers using peer admin card with the following command:<br/>
composer install runtime -c PeerAdmin@hlfv1 -n voting-network
## Step 3 : ###
Instantiate the the BNA file on fabric network:-<br/>
composer network start -c PeerAdmin@hlfv1 -a voting-network@0.0.1.bna -A admin -S adminpw<br/>
It will generate the bussiness network admin card in the working directory.<br/>Use that card in following steps to start the rest server and to add other participants.

## Step 4 : ##
run the rest server:-<br/>
composer-rest-server<br/>
this command will show some command line questions<br/>
write the bussiness card name as:admin@voting-network<br/>
and select no for authentication,tls and other things<br/>
