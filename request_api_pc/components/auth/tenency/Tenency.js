import { useEffect } from "react";
import Link from "next/link";

import {Segment} from "semantic-ui-react";

export default function Tenency() {
  return (
    <Segment placeholder>
      <ul>
        <li>
          <Link href="/products/leasing/getLeasing" >
            <a><h3>Products - getLeasing()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/leasing/getLeasingNextPaymets" >
            <a><h3>Products - getLeasingNextPaymets()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/factoring/getFactoring" >
            <a><h3>Products - getFactoring()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/factoring/getFactoringNextPaymets" >
            <a><h3>Products - getFactoringNextPaymets()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/credit/getCredit" >
            <a><h3>Products - getCredit()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/credit/getCreditNextPaymets" >
            <a><h3>Products - getCreditNextPaymets()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/credit_sos/getCreditSOS">
          <a><h3>Products - getCreditSOS()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/credit_simple/getCreditSimple">
          <a><h3>Products - getCreditSimple()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/credit_simple/getCreditSimpleNextPayments">
          <a><h3>Products - getCreditSimpleNextPayments()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/payments/getPayments">
          <a><h3>Products - getPayments()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/benefits/getBenefits">
          <a><h3>Products - getBenefits()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/benefits/postRequestBenefits">
          <a><h3>Products - postRequestBenefits(17)</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/postRequest">
          <a><h3>Products - postRequest('leasing', 'ggonzalez@unifin.com.mx', 'nuevo Leasing')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/products/postRequest">
          <a><h3>Products - postRequest('leasing', 'ggonzalez@unifin.com.mx', 'renovación de línea de crédito de Leasing')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/banners/getBanners">
          <a><h3>Banners - getBanners()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/banners/postRequestInformation">
          <a><h3>Banners - postRequestInformation('banner_web')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/credit_notes/leasing">
          <a><h3>Credit Notes - getIndex('leasing')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/credit_notes/factoring">
          <a><h3>Credit Notes - getIndex('factoring')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/credit_notes/credit">
          <a><h3>Credit Notes - getIndex('credit')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/credit_notes/getMonthIndex">
          <a><h3>Credit Notes - getMonthIndex('leasing', '2021-08')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/credit_notes/getMonthDownloadZip">
          <a><h3>Credit Notes - getMonthDownloadZip('leasing', '2021-08')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/credit_notes/getDownloadFile">
          <a><h3>Credit Notes - getDownloadFile('leasing', '1_4410_NC_41810', 'PDF')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/account_statements/leasing">
          <a><h3>Account Statements - getIndex('leasing')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/account_statements/factoring">
          <a><h3>Account Statements - getIndex('factoring')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/account_statements/credit">
          <a><h3>Account Statements - getIndex('credit')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/account_statements/getMonthIndex">
          <a><h3>Account Statements - getMonthIndex('leasing', '2021-08')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/account_statements/getMonthDownloadZip">
          <a><h3>Account Statements - getMonthDownloadZip('leasing', '2021-08')</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/account_statements/getDownloadFile">
          <a><h3>Account Statements - getDownloadFile('leasing', 1)</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/contracts/getLeasing">
          <a><h3>Contracts - getLeasing()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/contracts/getCredit">
          <a><h3>Contracts - getCredit()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/contracts/getRequestContractFile">
          <a><h3>Contracts - getRequestContractFile()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/contracts/getRequestInsurancePolicy">
          <a><h3>Contracts - getRequestInsurancePolicy()</h3></a>
          </Link>
        </li>
        <li>
          <Link href="/contracts/postRequestInsuranceRenewal">
          <a><h3>Contracts - postRequestInsuranceRenewal('62629')</h3></a>
          </Link>
        </li>
      </ul>
    </Segment>
  );
}